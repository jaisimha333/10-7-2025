import { useState } from 'react'
import './App1.css'
import Movie from './Components/ComponentMovie'

function App1() {
    const [count, setCount] = useState(0)
    return(
        <>
        <div>
            <h1>FEEL GOOD MOVIES</h1>
        </div>
        <div class = "sath">
            
                <Movie  Movie='EE NAGARANIKI EM AINDI' Genre='Comedy/Drama' Photo='https://i.pinimg.com/736x/c8/ac/46/c8ac46c0a0be320f3fcbd571995bce6e.jpg'/>
                <Movie Movie='JERSEY' Genre='Sport/Drama' Photo='https://i.pinimg.com/1200x/b0/56/e2/b056e21cfdb1833c251b37ecc01b30ee.jpg'/>
                <Movie Movie='JULAYI' Genre='Comedy/Action' Photo='https://i.pinimg.com/736x/76/e1/31/76e131e0e7ea6fcc9895bb5d2e15686a.jpg'/>
                <Movie Movie='NUVVU NAAKU NACHAV' Genre='Comedy/Family' Photo='https://i.pinimg.com/736x/f2/7b/3a/f27b3a3230a5548db6987bdffb574977.jpg'/>
            
            
            <Movie Movie='PELLI CHOOPULU' Genre='Comedy/Romance' Photo='https://i.pinimg.com/736x/7e/f3/40/7ef340b63adad33d76eb51fafbd2147c.jpg'/>
            <Movie Movie='JAILER' Genre='Action/Comedy' Photo='https://i.pinimg.com/1200x/64/65/d8/6465d8f562072ee6fe7ea6dce06cea4d.jpg'/>
            <Movie Movie='KHAIDI' Genre='Action/Thriller' Photo='https://i.pinimg.com/1200x/48/41/62/484162ff2f760aa799a81feb69bb8180.jpg'/>
            <Movie Movie='KHALEJA' Genre='Action/Comedy' Photo='https://i.pinimg.com/1200x/07/a1/e2/07a1e2bafdfe2e13050584bbefb3a941.jpg'/>
            <Movie Movie='SALAAR' Genre='Action/Thriller' Photo='https://i.pinimg.com/736x/32/b3/0a/32b30a53c11bd76b0846cfd4675d4d8f.jpg'/>
            <Movie Movie='MALLISWARI' Genre='Comdey/Romance' Photo='https://i.pinimg.com/736x/fb/cc/d8/fbccd808162ffa782a813e2508306fca.jpg'/>

            
        </div>
        <p>&copy;Jai</p>
        </>
    )
}
export default App1