// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line
import '../styles/ArticleListPages.css'


const articles =[
    {
        name: 'Article 1',
        title: 'Introduction to ReactJS: Why You Should Learn It',
        content: [
            	
            'ReactJS is a popular JavaScript library developed by Facebook for building user interfaces, especially for single-page applications. It allows developers to create large web applications that can change data, without reloading the page. React is fast, scalable, and simple, making it an essential tool for modern web development',

           <ol>
            <b>Why Learn ReactJS?</b> ,
           <b><li>Component-Based Architecture:</li></b>
            React is built around reusable components, which means you can break your UI into smaller, independent pieces, and reuse them throughout your application. This improves code maintainability and readability.
            <br />
            
           <b> <li>Virtual DOM:</li> </b>
           React uses a virtual DOM to optimize the rendering process. Instead of reloading the entire page, React updates only the necessary components, enhancing performance and user experience.
            
            <b> <li>Strong Ecosystem and Community Support:</li></b> 
            React has a large ecosystem with a wide range of tools, libraries, and extensions that simplify various tasks, from state management (Redux) to routing (React Router). With a large community behind it, React receives constant updates and support.
            
            <b> <li>Job Opportunities:</li></b>
            Companies like Facebook, Netflix, Instagram, and many more use React. As a result, React developers are in high demand across the tech industry, making it a lucrative skill to learn.
            
        </ol>,
            
            <b className="subTitle">Conclusion</b>,
            'ReactJS is an excellent library for modern web development, offering fast, efficient, and maintainable code. Its popularity ensures that it will continue to be a major player in the web development industry for years to come.',
            
          
     
        ]
    },
    {
        name: 'Article 2',
        title: 'How ReactJS Manages State with Hooks',
        content: [
            'React Hooks were introduced in version 16.8, revolutionizing how developers manage state and lifecycle methods in functional components. Prior to hooks, class components were the only way to manage state, but now with hooks, managing state is more efficient and readable.',

            <b>What Are React Hooks?</b>,
            'Hooks are special functions that allow you to "hook into" React features, such as state management and lifecycle methods, without writing class components. The most common hooks are:',
            
    <ol>

        
                
        <b><li>useState:</li></b> 
        This hook allows you to add state to functional components. It returns an array where the first element is the state variable, and the second element is a 'function' to update the state.
        <pre>
            <code>
                const [count, setCount] = useState(0);
            </code>
        </pre>

      <b><li>useEffect</li></b>
        This hook lets you perform side effects in your components, such as fetching data or setting up event listeners. It runs after the component renders and can also clean up after itself.
      
        <pre>
            <code>
               
            {`useEffect(() => {`}
                  {'document.title = `You clicked ${count} times`;'}
                {'}, [count]);'}
          
            </code>
        </pre>
    
        <b><li>useContext:</li></b>
        This hook provides a simple way to access global state without needing to pass props down multiple levels of components.

<br/>
<br/>
<b>Advantages of Hooks</b>
<ul>
<li>Simpler Code:</li> Hooks allow you to manage state and side effects in functional components, simplifying the code structure.
<li>Reusability: </li> Hooks can be extracted and reused across components, improving code maintainability.
<li>Less Boilerplate:</li> You no longer need to deal with class syntax or lifecycle methods like componentDidMount and componentWillUnmount.
</ul>

<br />
<b>Conclusion: </b>
React Hooks have made functional components more powerful and streamlined state management. Mastering hooks will make your React code cleaner, more efficient, and easier to maintain.


    
    </ol>,
    ]
    },
]

export default articles;