sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        onClickProductDetail: function(oEvent) {
            var oSelectedItem = oEvent.getSource().getParent().getParent().getSelectedItem().getBindingContext().getObject();
            var prdRowData = new sap.ui.model.json.JSONModel();
            prdRowData.setData(oSelectedItem);
            this.getView().setModel(prdRowData, "prdSelectedDataModel");
            
				this._oInsDtDialog = sap.ui.xmlfragment("idInsDialog", "demo.com.zlistreport2git.ext.fragment.ProductDetail", this);
				this.getView().addDependent(this._oInsDtDialog);

			this._oInsDtDialog.open();
            
        }
    };
});