function validation(){
    if (inpTitle.value.trim() == ""){
        inpTitle.focus()
        return true
    }
    if (inpDesc.value.trim() == ""){
        inpDesc.focus()
        return true
    }
    if (inpImg.value.trim() == ""){
        inpImg.focus()
        return true
    }
    if (inpView.value.trim() == ""){
        inpView.focus()
        return true
    }
    if (inpDate.value.trim() == ""){
        inpDate.focus()
        return true
    }
}