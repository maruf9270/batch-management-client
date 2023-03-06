import { GURDIAN_NAME, GURDIAN_TOOGLE, NAME } from "./ActionTypes/ActionTypes";

const initialState = {
    pohoto:'',
    name:{
        value:"",
        error:false
    },
    gurdian:{
        gurdian:"",
        name:''
        ,error: false
    },
    mother_name:'',
    sex:'',
    present_address:{
        village:'',
        post:'',
        district:'',
        state:'',
    },
    marital_status:'',
    nationality:'',
    permanent_address:{
        village:'',
        post:'',
        district:'',
        state:'',
    },
    mobile:'',
    dob:'',
    place_of_birth:{
        village:'',
        post:'',
        district:'',
        state:'',
    },
    education:{
        exam_name:'',
        institute:'',
        passing_year:'',
        result:''
    }
}

export const AddStudentReducer = (state = initialState, action)=>{
    switch (action.type) {
        case NAME:
            if(action.payload){
                return{
                    ...state,
                    name:{
                        ...state.name,
                        name:action.payload,
                        error:false
                    }
                }
            }
            else{
                return{
                    ...state,
                    name:{
                        ...state.name,
                        error:true
                    }
                }
            }
        
        // Case for toogling gurdian 
        case GURDIAN_TOOGLE:
            console.log(state);
            return{
                ...state,
                gurdian:{
                    ...state.gurdian,
                    gurdian: action.payload,
                    error: false
                }

            }

        // Case for inputting gurdian name 
        case GURDIAN_NAME:
            
            return{
                ...state,
                gurdian:{
                    ...state.gurdian,
                    name: action.payload,
                    error: false
                }
            }
       
    
        default:
           return state;
    }

}