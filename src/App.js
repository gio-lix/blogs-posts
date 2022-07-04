import Form from "./components/Form";
import State from "./components/State";


function App() {
    return (
        <main className="max-w-2xl  mx-auto">
            <h1 className='text-center font-bold text-xl'>Posts</h1>

            <section className='grid grid-cols-1 md:grid-cols-2 mx-5 sm:mx-3 md:mx-0 gap-7 place-items-center mt-10   items-start'>
                <State/>
                <span className='hidden md:inline-flex  w-full'>
                    <Form/>
                </span>

            </section>
        </main>
    );
}

export default App;
