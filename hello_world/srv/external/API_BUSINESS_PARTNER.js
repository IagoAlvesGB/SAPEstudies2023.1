module.exports = cds.service.impl(srv => {

    srv.before('READ', 'A_BusinessPartnerAddress', req => {
      const { BusinessPartner, AddressID:ID } = req.data
      if (BusinessPartner === '1003764' && ID === '28238'){ req.reject (500, 'Your error message.') }        
    })

    srv.on('reset',async () => {
        const db = await cds.connect.to('db')
        await db.run(()=> require('../init')(db))
    })

  })
  