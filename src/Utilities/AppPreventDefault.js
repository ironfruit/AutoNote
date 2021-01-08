const AppPreventEnter = (e) => {
    console.log('AppPreventEnter')
    if(e.charCode === 13){
        e.preventDefault()
    }
}

export default AppPreventEnter