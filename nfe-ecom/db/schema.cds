namespace gb.nfe_ecomm;

using { cuid, managed } from '@sap/cds/common';

@cds.persistence.exists
entity nfedoc : cuid, managed {
    Key accessKey :String;
    externalOrderId : String(11);
    salesOrderId : String(5);
    deliveryId : String(8);
    basketCode : String(3);
    nfeNumber : String(9);
    nfeSerie : String(3);
    authorizationTimestamp : Timestamp;
    authorizationProtocolNumber : Integer;
    issuerCnpj : String(11);
    issuerStateTaxNumber : String(10);
    issuerName: String(25);
    internalNfeId: String(10);
    packages: Integer;
    weight: Decimal;
    itemsTotal: Integer;
    nfTotal: Decimal;
    items: array of {
        itemNumber : String(6);
        materialCode : String(18);
        cfop : String(4);
  };

}


