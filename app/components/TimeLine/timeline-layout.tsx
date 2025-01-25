import { TimelineItem, Timeline, TimelineHeader, TimelineTime, TimelineTitle, TimelineDescription } from "./timeline"

interface TimelineLayoutProps {
    id: string;
    title: string;
    description: string;
    date: string;
}

export default function TimelineLayout() {
    const timelineData: TimelineLayoutProps[] = [
        {
            id: "1",
            title: "Started Coding Journey",
            description: "Began learning HTML, CSS, and JavaScript to build basic websites.",
            date: "15th December 2002",
        },
        {
            id: "2",
            title: "Explored Data Science",
            description: "Dived into Python, Pandas, and Matplotlib while analyzing datasets.",
            date: "2021-05-20",
        },
        {
            id: "3",
            title: "Created First Blog Website",
            description: "Built a blog website using ReactJS and deployed it on Vercel.",
            date: "2022-08-10",
        },
        {
            id: "4",
            title: "Learned Prisma and RemixJS",
            description: "Started working on backend integration with Prisma and RemixJS.",
            date: "2023-10-15",
        },
        {
            id: "5",
            title: "Built a Machine Learning Model",
            description: "Developed a prediction model using Python for a Kaggle competition.",
            date: "2024-07-01",
        },
    ];

    return (
        <Timeline className=''>
            {timelineData.map((item) => (
                <TimelineItem key={item.id}>
                    <TimelineHeader>
                        <TimelineTime>{item.date}</TimelineTime>
                        <TimelineTitle>{item.title}</TimelineTitle>
                    </TimelineHeader>
                    <TimelineDescription>{item.description}</TimelineDescription>
                </TimelineItem>
        ))}
        </Timeline>
    );
}
