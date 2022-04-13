export default function Hyper({ text }) {
  console.log(text, "test");

  return (
    <div>
      {text.map((item, index) => {
        return <div key={index}>{item.title}</div>;
      })}
    </div>
  );
}
// {
//   {
//     data.map((item, index) => {
//       return <h1 key={index}>{item.title}</h1>;
//     });
//   }
// }
