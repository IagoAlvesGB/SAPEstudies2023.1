namespace sap.nfeecomm;

//using { cuid, managed } from '@sap/cds/common';

@cds.persistence.exists
entity Notafiscal {
    Key docnum :String(10); //numc 10
    cnpj_bupla : String(14); // nunc 14
    ie_bupla : String(18); // Char 18
    nftot : String(15); // Curr 15
    nfenum : String(9); // Char 9
    authtimes : Time; //Tims
    brgew : String(15); // Quan
    ntgew : String(15); // Quan    
    anzpk : String(5); // Nunc 
    bukrs : String(4);
    nflin : Association to many Itemnotafiscal on nflin.docnum = $self.docnum;
    t001 : Association to Texto on t001.bukrs = $self.bukrs;
}

@cds.persistence.exists
entity Itemnotafiscal {
  key docnum : String(10); // numc 10
  key itmnum : String(6); // numc 6
  xped : String(10);
  matnr : String(40);
  cfop : String(10);
  refkey : String(35);
  mara : Association to many Mara on mara.matnr = $self.matnr;
  vbrp : Association to Docfatitem on vbrp.vbeln = $self.refkey;
}

@cds.persistence.exists
entity Texto{
  key bukrs : String(4);
  butxt : String(25);
}

@cds.persistence.exists
entity Mara{
  key matnr : String(40);
  zz1_externalb1_prd : String(40);
}

@cds.persistence.exists
entity Docfatitem{
  key vbeln : String(10);
  vgbel : String(10);
  aubel : String(10);

}

