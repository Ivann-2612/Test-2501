const Select = (options) => {
    const select = documenent.createElement("select")
    const defOpt = documenent.createElement("option")
    defOpt.value = '-1'
    defOpt.selected = true
    defOpt.disabled =true
    defOpt.hidden = true
select.append(defOpt)

options.forEach(option => {
    const option = documenent.createElement("option")
    option.textContent = option
    option.value = option
    select.append(option)

})
return select
}

export default Select