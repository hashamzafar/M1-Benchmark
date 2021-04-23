//  JS EXERCISES

//         21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
        x = 'John'
        y = 'Deo'
        console.log(x + "<>"+ y)



        // 22) Create an object with properties such name, surname, email
        let obj = {
            name : 'Hasham',
            surname : 'Zafar',
            email : 'hasham307@gmail.com'
        }
        
        // 23) Delete Email from the previously created object
        delete obj.email
        console.log(obj)
        // 24) Create an array with 10 strings in it
        let arr = [
            'string1','string2','string3','string4','string5','string6','string7','string8','string9','string10'
        ]
        // 25) Print in the console every string in the previous array
        console.log(arr)
        // 26) Create an array with 100 random numbers in it
        let arr2 = []
            while(arr2.length < 100){
                let r = Math.floor(Math.random() * 100) + 1;
                if(arr.indexOf(r) === -1) arr2.push(r);
            } 
        
        console.log(arr2)
        // 27) Wrote a function to get the MAX and the MIN from the previously created array
        // let max_min = function(){
        //     Math.max(arr2).Math.min(arr2)
        // }
        // console.log(max_min)
        const forLoopMinMax = () => {
            let min = arr2[0], max = arr2[0]
          
            for (let i = 1; i < arr2.length; i++) {
              let value = arr2[i]
              min = (value < min) ? value : min
              max = (value > max) ? value : max
            }
          
            return [min, max]
          }
          console.log(forLoopMinMax())
        // 28) Create an array of arrays, in which every array has 10 random numbers
        let arr3 = [];
            for(let i = 0; i < 1; i++){
                let current = [];
                for(let j = 0; j < 10; j++)
                    current.push(Math.floor(Math.random() * 10));
                arr3.push(current);
            }
            console.log(arr3)

        // 29) Create a function that gets 2 arrays and returns the longest one
            let arr4 = ['string11','string12','string13']
                const longestString = function (){
                // for (i=0; i <arr.length; i++){
                    if (arr.length > arr4.length){
                    return arr
                    }else 
                    return arr4
          
            }
            
          
          console.log(longestString())

        // 30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values
            let arr5 = [2,3,4,5,9,8]
            let arr6 = [7,7,5,6]

    
            var sum = arr5.reduce(function(a, b){
                return a + b;
            }, 0);
             
            var sum2 = arr6.reduce(function(a, b){
                return a + b;
            },0)
            // console.log(sum)
            const sum3 = function (arr5,arr6){
                if (sum > sum2){
                return sum
            } else{
                return sum2
            } 
        }
        console.log(sum3())


        // DOM 

        // 31) Get element with ID "container" from the page
        let titleClass = document.getElementById('container')
        console.log(titleClass)
        // 32) Get every "td" from the page
        let tdCycle = document.querySelectorAll('td')
        // 33) Create a cycle that prints the text inside every td of the page
      let tdName = tdCycle.innerText
        console.log(tdCycle)
          
        // 34) Write a function to change the heading of the page
    //    let newTitle = 'benchmark'
            // document.titleClass = newTitle
            const changePageTitle = function () {
               let newTitle = 'The title has changed!';
                document.titleClass = newTitle;
            }
            changePageTitle()
            console.log(changePageTitle())
        // 35) Write a function to add an extra row to the table
        let tbodyRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];
            const editTable = function(){
            // Insert a row at the end of table
            let newRow = tbodyRef.insertRow();

            // Insert a cell at the end of the row
            let newCell = newRow.insertCell();

            // Append a text node to the cell
            let newText = document.createTextNode('new row added');
            newCell.appendChild(newText);
            }
            editTable()
        // 36) Write a function to add the class "test" to each row in the table
        let addClass = document.querySelectorAll('table tbody tr')
        const changeClass = function () {
            addClass.classList.add("test")
            
          };
          changeClass()
        // 37) Write a function to add a red background to every link in the page
        let link = document.querySelectorAll('a')
          const linkColor = function(){
           link.style.background.color = 'red'
          }
          linkColor()
        // 38) Console log "Page loaded" when the page is correctly loaded
         
            window.onload.console.log('Page loaded')
         
        
        // 39) Write a function to add new items to a UL
        const ulAdd = function() {
            var main = document.getElementById("main");
            var ul = document.createElement("ul");
             
               
              }
            ul.appendChild(document.createTextNode("Four"));
            main.appendChild(ul)
            ulAdd()
          

        // 40) Write a function to empty a list -->
       const clearlist = function (array) {
           let empty = document.querySelector('ol')
            while (empty.length) {
              empty.pop();
            }
          }
          clearlist()