export default function Singers({ singer }) {
    console.log(singer);
    return (
        //here I can use css styles, class, css file
        <div>
            <h4>Singer: {singer.name}</h4>
            <h4>Age: {singer.age}</h4>
        </div>
    )
}