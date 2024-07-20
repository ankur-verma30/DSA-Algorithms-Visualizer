//canvas variable
let canvas,canvaswidth,canvasheight,ctrl;

//call canvasElement() to store the height width in the above canvas element

canvasElement();

//3 array are declared

//1) arr is for storing array element
//2) itmd for storing the intermediate values
//3) visited is for the element which has been sorted

let arr=[],itmd=[],visited=[]

let arrlen=40;

for(let i=0;i<arrlen;i++){
    itmd.push(0)
    visited.push(0)
}

//merge two sorted arrays
function mergeArray(start,end){
    let mid=parseInt((start+end)>>1);
    let start1=start,start2=mid+1;
    let end1=mid,end2=end;

    let index=start;
    //initial index of merged subarray

    while(start1<=end1  && start2<=end2){
        if(arr[start1]<=arr[start2]){
            itmd[index]=arr[start1]
            index++;
            start1++;
        }
        else if(arr[start1]>arr[start2]){
            itmd[index]=arr[start2]
            index++;
            start2++;
        }
    }

    //copy the remaining elements of arr[], if there is any
    while(start1<=end1){
        itmd[index]=arr[start1]
        index++;
        start1++;
    }

    while(start2<=end2){
        itmd[index]=arr[start2]
        index++;
        start2++;
    }

    index = start
    while (index <= end) {
        arr[index] = itmd[index];
        index++;
    }

}

function drawbars(start,end){

    ctrl.clearRect(0,0,1000,1500)

    //styling the bars

    for(var i=0;i<arrlen;i++){
        

        //changing styles of the bar
        ctrl.fillStyle="black";
        ctrl.shadowOffsetX=2;
        ctrl.shadowColor="chocolate";
        ctrl.shadowBlur=3;
        ctrl.shadowOffsety=5;


        //size of the rectangular bars
        ctrl.fillRect(25*i,300-arr[i],20,arr[i])
        
        if(visited[i]){
            ctrl.fillStyle="#006d13";
            ctrl.fillRect(25*i,300-arr[i],20,arr[i])
            ctrl.shadowOffsetX=2
        }

    }

    for (let i = start; i <= end; i++) {
        ctrl.fillStyle = "orange"
        ctrl.fillRect(25 * i, 300 - arr[i], 18, arr[i])
        ctrl.fillStyle = "#cdff6c"
        ctrl.fillRect(25 * i,300, 18, arr[i])
        visited[i] = 1
    }
}

    function timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Merge Sorting
const mergeSort = async (start, end) => {
    if (start < end) {
        let mid = parseInt((start + end) >> 1)
        await mergeSort(start, mid)
        await mergeSort(mid + 1, end)
        await mergeArray(start, end)
        await drawBars(start, end)
 
        // Waiting time is 800ms
        await timeout(800)
    }
}
 
// canvasElements function for storing
// width and height in canvas variable
function canvasElements() {
    canvas = document.getElementById("Canvas")
    canvas.width = canvas.height = 1000
    canvaswidth = canvas.width
    canvasheight = canvas.height
    ctrl = canvas.getContext("2d")
}
 
// Asynchronous MergeSort function 
const performer = async () => {
    await mergeSort(0, len_of_arr - 1)
    await drawBars()
 
    // Code for change title1 text 
    const title1_changer = document.querySelector(".title1")
    title1_changer.innerText = "Array is completely sorted"
}
performer();