interface IListContainer {
    title: string;
    icon: string;
    contents: string[];
}


export default function ListContainer({ title, icon, contents }: IListContainer) {
    return (
        <div id="aboutListContainer">
            <h2 className="text-2xl capitalize font-bold">
                <i className={`bi bi-${icon}`} />
                {title}
            </h2>
            <hr />
            <ul>
            {contents.map((item)=>(
                <li>{item}</li>
            ))}
            </ul>
        </div>
    )
}