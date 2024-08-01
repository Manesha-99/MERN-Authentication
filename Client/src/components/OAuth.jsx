import React from 'react'

const OAuth = () => {

    const handleWithGoogle = async ()=>{
        try{

        }catch(error){
            console.log('Could not login with google..', error)
        }
    }
  
  
    return (
    
        <button type='button' onClick={handleWithGoogle} className="p-3 text-white uppercase bg-red-700 rounded-lg hover:opacity-90">
            Continue with Google
        </button>
    
  )
}

export default OAuth