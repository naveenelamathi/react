
import './App.css';
import Card from"./Card";
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  const data= [
    {
      name:"free",
      price:0,
      period:"month",
      features:[
        {
          title:"single users",
          isEnable:true
        },
        {
          title:"5GB Storage",
          isEnable:true
        },
        {
          title:"Unlimited Public Projects",
          isEnable:true
        },
       
        {
          title:"Community Access",
          isEnable:true
        },
        {
          title:"Unlimited Private Projects",
          isEnable:false
        },
        {
          title:"Dedicated Phone Support",
          isEnable:false
        },
        {
          title:"Free Subdomain",
          isEnable:false
        },
        {
          title:"Monthly Status Reports",
          isEnable:false
        },
      ],
    },
    {
      name:"free",
      price:0,
      period:"month",
      features:[
        {
          title:"single users",
          isEnable:true
        },
        {
          title:"5GB Storage",
          isEnable:true
        },
        {
          title:"Unlimited Public Projects",
          isEnable:true
        },
       
        {
          title:"Community Access",
          isEnable:true
        },
        {
          title:"Unlimited Private Projects",
          isEnable:false
        },
        {
          title:"Dedicated Phone Support",
          isEnable:false
        },
        {
          title:"Free Subdomain",
          isEnable:false
        },
        {
          title:"Monthly Status Reports",
          isEnable:false
        },
      ],
    },
    {
      name:"free",
      price:0,
      period:"month",
      features:[
        {
          title:"single users",
          isEnable:true
        },
        {
          title:"5GB Storage",
          isEnable:true
        },
        {
          title:"Unlimited Public Projects",
          isEnable:true
        },
       
        {
          title:"Community Access",
          isEnable:true
        },
        {
          title:"Unlimited Private Projects",
          isEnable:false
        },
        {
          title:"Dedicated Phone Support",
          isEnable:false
        },
        {
          title:"Free Subdomain",
          isEnable:false
        },
        {
          title:"Monthly Status Reports",
          isEnable:false
        },
      ],
    },
    
  ];
  return (
<section class="pricing py-5">
  <div class="container">
    <div class="row">
      <Card></Card>
    </div>
    </div>
    </section>
  );
}

export default App;
