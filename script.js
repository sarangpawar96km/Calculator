function appendToResult(value) 
            {
                document.getElementById("result").value += value;
            }

            function calculate() 
            {
                var result = document.getElementById("result").value;
                try 
                {
                    document.getElementById("result").value = eval(result);
                } 
                catch (error) 
                {
                    document.getElementById("result").value = "Error";
                }
            }

            function clearResult() 
            {
                document.getElementById("result").value = "";
            }

             function deleteLastCharacter() {
             document.getElementById("result").value = result.value.slice(0, -1);
    }