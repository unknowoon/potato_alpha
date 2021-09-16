export default function colorchange(state, row) { //클릭된 버튼의 id값을 state에 저장
    if(row===1 || row===2){ //TruckChoice에 truckType
        return{
            cc1: row
        }
    }
    else if(row===3){ //TruckChoice에 truckLocation
        return {
            cc2: row,
        }
    }
    else if(row===4||row===5||row===6||row===7){
        return {
            cc3: row
        }
    }
    else if(row===8){
        return {
            cc4: row
        }
    }
    else if(row===9){
        return {
            cc5: row
        }
    }
    else if(row===10||row===11){
        return {
            cc6: row
        }
    }
}