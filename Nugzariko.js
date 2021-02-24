


function tania(nia) {

        setoutput(output + nia.target.innerText)
        

    } 

    function nishani(ნიშანი){

        if(sign == "" && output != ""){
            setsign(ნიშანი.target.innerText)
            წინადაახლანდელი()
        }
            
    }
    
    function წინადაახლანდელი() {
        
        setwinaautput(output)
        setoutput("")

    }

    function უდრის() {
        switch(sign){

            case "+":
            setoutput(Number(output) + Number(winaautput))
            setwinaautput("")
            setsign("")
            break;

            case "/":
            setoutput( Number(winaautput) / Number(output))
            setwinaautput("")
            setsign("")
            break;

            case "*":
            setoutput( Number(winaautput) * Number(output))
            setwinaautput("")
            setsign("")
            break;
        }
    }
    
    return(
        <div>

            <div id = "aidi">

                <div className ="p">
                    <p id = "meore">{winaautput + ` ${sign}`}</p>
                    <p id = "pirveli">{output}</p>
                </div>
                <button onClick ={tania}>0</button>
                <button onClick ={tania}>1</button>
                <button onClick ={tania}>2</button>
                <button onClick ={tania}>3</button>
                <button onClick ={tania}>4</button>
                <button onClick ={tania}>5</button>
                <button onClick ={tania}>6</button>
                <button onClick ={tania}>7</button>
                <button onClick ={tania}>8</button>
                <button onClick ={tania}>9</button>
                <button className = 'delete' onClick ={მინუსერთი}>delete</button>
                <button className = 'AC' onClick ={deletee}>AC</button>
                <button onClick ={nishani}>/</button>
                <button onClick ={nishani}>*</button>
                <button onClick ={nishani}>+</button>
                <button onClick = {უდრის}>=</button>
                
                
            </div>
            
        </div>
    )
}


export default Nugzari
