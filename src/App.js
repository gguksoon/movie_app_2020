function Food({foodName, picture}) {
  return (
    <div>
      <img src={picture} alt="HTML5" style={{width:200}}/>
      <h3>I like {foodName}</h3>
    </div>
  );
}

const foodILike = [
  {
    name: 'Kimchi',
    image: 'https://health.chosun.com/site/data/img_dir/2021/09/01/2021090100998_0.jpg'
  },
  {
    name: 'Samgyeopsal',
    image: 'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg'
  },
  {
    name: 'Bibimbap',
    image: 'https://cf.creatrip.com/original/blog/8937/166lv4gz4u0ei0nv8oykcq5t61w2zdtf.jpg'
  }
];

function App() {
  return (
    <div> 
      <h1>Hello, React!</h1>
      {foodILike.map(dish => (
        <Food key={dish.name} foodName={dish.name} picture={dish.image}/>
      ))}
    </div>
  );
}

export default App;
