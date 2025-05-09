
export const StateIn = [{
    State: false,
}]

export function ChangePosition(){
    const InfoContainer = document.getElementById('SignComponent');
    const LocationInfo = InfoContainer.getBoundingClientRect();


    const FormContainer = document.getElementById('FormComponent');
    const LocationForm = FormContainer.getBoundingClientRect();

    if(LocationForm.left == 308 && LocationInfo.left == 848){

        document.getElementById('Cname').style.display = 'none';
        document.getElementById('TitleSection').innerText = 'Sign in to Diprella';
        // document.getElementById('BtnForInSide').innerText = 'Sign In';
        
        StateIn.forEach(Data => {Data.State = true});
     
        InfoContainer.style.transform = 'translateX(-540px)';
        InfoContainer.style.borderTopLeftRadius = '16px';
        InfoContainer.style.borderBottomLeftRadius = '16px';
        InfoContainer.style.borderTopRightRadius = '0px';
        InfoContainer.style.borderBottomRightRadius = '0px';

        FormContainer.style.transform = 'translateX(370px)';
        FormContainer.style.borderTopLeftRadius = '0px';
        FormContainer.style.borderBottomLeftRadius = '0px';
        FormContainer.style.borderTopRightRadius = '16px';
        FormContainer.style.borderBottomRightRadius = '16px';
    }else{

        document.getElementById('Cname').style.display = 'flex';
        document.getElementById('TitleSection').innerText = 'Create Account';
        // document.getElementById('BtnForInSide').innerText = 'Sign Up';

        StateIn.forEach(Data => {Data.State = false});

        InfoContainer.style.transform = 'translateX(0px)';
        InfoContainer.style.borderTopLeftRadius = '0px';
        InfoContainer.style.borderBottomLeftRadius = '0px';
        InfoContainer.style.borderTopRightRadius = '16px';
        InfoContainer.style.borderBottomRightRadius = '16px';

        FormContainer.style.transform = 'translateX(0px)';
        FormContainer.style.borderTopLeftRadius = '16px';
        FormContainer.style.borderBottomLeftRadius = '16px';
        FormContainer.style.borderTopRightRadius = '0px';
        FormContainer.style.borderBottomRightRadius = '0px';



    }


}