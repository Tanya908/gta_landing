import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
        <div>
            <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
        </div>
    </main>
  )
}

export default App