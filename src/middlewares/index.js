export const logger = (store) => (next)=> (action)=>{

    next(action)
}

export const newProp = (store)=> (next)=> (action)=>{
    const newData = action.action.payload.map((pokemon) => { return { ...pokemon, type: "planta" } })
    const updateInfo = {...action, action:{...action.action, payload:newData}}
    next(updateInfo)
}