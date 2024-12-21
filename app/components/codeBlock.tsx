// https://react-code-block.netlify.app/usage#installation
import { CodeBlock } from 'react-code-block';

export default function CodeBlockDemo({ code, language }: Readonly<{ code: string, language: string }>) {
  return (
    <CodeBlock code={code} language={language}>
        <CodeBlock.Code className="bg-zinc-900 dark:bg-zinc-900 p-6 rounded-lg text-xs">
          <div className="table-row">
            <CodeBlock.LineNumber className="table-cell pr-4 text-sm text-gray-500 text-right select-none" />
            <CodeBlock.LineContent className="table-cell">
              <CodeBlock.Token />
            </CodeBlock.LineContent>
          </div>
        </CodeBlock.Code>
    </CodeBlock>
  );
}