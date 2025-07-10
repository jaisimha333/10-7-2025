import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gill from './Components/ComponentGill'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div style={{ backgroundColor:' black',padding:20,color:'white'}}>
 
    <h1>INDIAN CRICKET TEAM[TEST]</h1>
    <Gill Name='Shubman Gill' Role='Captain,Batsmen' Image='https://i.pinimg.com/736x/a8/a2/06/a8a20692db229f27880a8f9a331806f2.jpg' Anchor='https://en.wikipedia.org/wiki/Shubman_Gill'/>
    <Gill Name='KL RAHUL' Role='Opener' Image='https://i.pinimg.com/736x/7a/1b/3d/7a1b3da3fd862c7e21eee3f51f4e3031.jpg' Anchor='https://en.wikipedia.org/wiki/KL_Rahul'/>
    <Gill Name='Yashashwi Jaiswal' Role='Opener' Image='https://i.pinimg.com/736x/37/75/bf/3775bf0430173ad70464808a11de5ccb.jpg' Anchor='https://en.wikipedia.org/wiki/Yashasvi_Jaiswal'/>
    <Gill Name='Karun Nair' Role='Batsmen at No.3'Image='https://i.pinimg.com/736x/92/cc/ea/92cceaff0a51b27a58ebb1b84b4a11fb.jpg' Anchor='https://en.wikipedia.org/wiki/Karun_Nair'/>
    <Gill Name='Rishabh Pant' Role='Wicket keeper, Batsmen' Image='https://i.pinimg.com/736x/ac/39/53/ac3953ad768377f8c6dd48248a6fbacd.jpg' Anchor='https://en.wikipedia.org/wiki/Rishabh_Pant'/>
    <Gill Name='Nitish Kumar Reddy' Role='All Rounder' Image='https://i.pinimg.com/736x/6c/33/b8/6c33b836ea2b0a17720c8db85c68f199.jpg' Anchor='https://en.wikipedia.org/wiki/Nitish_Kumar_Reddy'/>
    <Gill Name='Ravindra Jadeja' Role='All Rounder' Image='https://i.pinimg.com/736x/7b/be/98/7bbe98df74b54070f184e436ccbae581.jpg' Anchor='https://en.wikipedia.org/wiki/Ravindra_Jadeja'/>
    <Gill Name='Shardul Thakur' Role='All Rounder' Image='https://i.pinimg.com/736x/3e/c4/91/3ec491d458c6395022186881ce2c1544.jpg' Anchor='https://en.wikipedia.org/wiki/Shardul_Thakur'/>
    <Gill Name='Jasprit Bumrah' Role='Pacer' Image='https://i.pinimg.com/736x/cd/f3/7f/cdf37ff49b64011109caa9bb454ad959.jpg' Anchor='https://en.wikipedia.org/wiki/Jasprit_Bumrah'/>
    <Gill Name='Mohammed Siraj' Role='Pacer' Image='https://i.pinimg.com/736x/78/5b/ad/785bad1b7d7b87a915d58411519e71f1.jpg' Anchor='https://en.wikipedia.org/wiki/Mohammed_Siraj'/>
    <Gill Name='Akash Deep' Role='Pacer' Image='https://i.pinimg.com/736x/08/df/3f/08df3f36d377477fb56741de41d002c2.jpg' Anchor='https://en.wikipedia.org/wiki/Akash_Deep'/>
    </div>
      
     
       

  );
}

export default App