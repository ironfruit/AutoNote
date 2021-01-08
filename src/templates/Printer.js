import AppPreventDefault from '../Utilities/AppPreventDefault'

const Printer = () => {
    
    return(
        <div className="printer_div">
            <div className="an_div_wrkst" class="an_div_wrkst" id="an_div_wrkst">
                <label class="an_label_wrkst" id="an_div_wrkst">Workstation: </label>
                <textarea className="an_ta_wrkst" class="an_ta_wrkst thin_ta" id="an_div_wrkst" onKeyPress={AppPreventDefault}></textarea>
            </div>
            <div className="an_div_brand" class="an_div_brand" id="an_div_brand">
                <label class="an_label_brand" id="an_div_brand">Brand: </label>
                <textarea className="an_ta_brand" class="an_ta_wrkst thin_ta" id="an_div_wrkst" onKeyPress={AppPreventDefault}></textarea>
            </div>
            <div className="an_div_model" class="an_div_model" id="an_div_model">
                <label class="an_label_wrkst" id="an_div_wrkst">Model: </label>
                <textarea className="an_ta_wrkst" class="an_ta_wrkst thin_ta" id="an_div_wrkst" onKeyPress={AppPreventDefault}></textarea>
            </div>
            <div className="an_div_ipaddress" class="an_div_ipaddress" id="an_div_ipaddress">
                <label class="an_label_ipaddress" id="an_div_ipaddress">IP Address: </label>
                <textarea className="an_ta_ipaddress" class="an_ta_ipaddress thin_ta" id="an_div_ipaddress" onKeyPress={AppPreventDefault}></textarea>
            </div>
            <div className="an_div_issue" class="an_div_issue" id="an_div_issue">
                <label class="an_label_issue" id="an_div_issue">Issue: </label>
                <textarea className="an_ta_issue" class="an_ta_issue thin_ta" id="an_div_issue"></textarea>
            </div>
        </div>
    )
}

export default Printer