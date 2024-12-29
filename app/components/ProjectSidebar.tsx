import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";

import { Checkbox } from "~/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel,} from "~/components/ui/form";
import {SomeProjects, categories} from "./../shared/projectsData";

// Validation schema
const FormSchema = z.object({
  items: z.array(z.string()),
});

export default function ProjectFilter() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: [], // No categories selected by default
    },
  });

  // Watch selected items for real-time filtering
  const selectedItems = useWatch({
    control: form.control,
    name: "items",
  });

  // Determine which projects to display
  const filteredProjects =
    selectedItems.length === 0
      ? SomeProjects // Show all projects if no filters are selected
      : SomeProjects.filter((project) =>
          selectedItems.includes(project.category)
        );

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar for Filters */}
      <div className="py-4 px-6 bg-zinc-900 rounded-md">
        <Form {...form}>
          <form>
            <FormField control={form.control} name="items"
              render={() => (
                <FormItem>
                  <div className="mb-3 flex flex-col">
                    <FormLabel className="text-md font-semibold text-zinc-50">Project Types</FormLabel>
                    <FormLabel className="text-xs font-semibold text-zinc-400">Select the projects you want to display!</FormLabel>
                  </div>
                  {categories.map((category) => (
                    <FormField
                      key={category.id}
                      control={form.control}
                      name="items"
                      render={({ field }) => {
                        const isChecked = field.value?.includes(category.id);
                        return (
                          <FormItem key={category.id} className="flex flex-row items-center space-x-2 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={isChecked}
                                onCheckedChange={(checked) => {
                                  const newValue = checked
                                    ? [...(field.value || []), category.id]
                                    : (field.value || []).filter(
                                        (value) => value !== category.id
                                      );
                                  field.onChange(newValue);
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-semibold">
                              {category.label}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>

      {/* Projects Display */}
      <div className="w-full ml-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredProjects.map((project) => (
            <div
              key={project.name}
              className="border rounded-lg p-4 shadow-sm hover:shadow-md">
              <img
                src={project.src}
                alt={project.name}
                className="w-full h-32 object-cover rounded-md mb-4"
              />
              <h3 className="font-bold text-lg">{project.name}</h3>
              <p className="text-sm text-zinc-400 line-clamp-4">{project.description}</p>
            </div>
          ))}
        </div>
        {filteredProjects.length === 0 && (
          <p className="text-center text-zinc-100 mt-4">
            No projects match the selected filters.
          </p>
        )}
      </div>
    </div>
  );
}
