module.exports = (db)=>{
    const { A_BusinessPartnerAddress: Addresses } = db.entities(
      'API_BUSINESS_PARTNER'
    )
    return cds.run ([
      INSERT.into(Addresses).columns(
        'BusinessPartner',
        'AddressID',
        'CityName',
        'StreetName'
      ).rows(
        [ '1003764', '28238', 'Walldorf', 'Dietmar-Hopp-Allee' ],
        [ '1003765', '28241', 'Palo Alto', 'Hillview Avenue' ],
        [ '1003766', '28244', 'Hallbergmoos', 'Zeppelinstraße' ],
        [ '1003767', '28247', 'Potsdam', 'Konrad-Zuse-Ring' ]
      )
      // add more INSERTs here, as appropriate
    ])
  }
  