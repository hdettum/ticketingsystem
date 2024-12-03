const cds = require('@sap/cds')

module.exports = cds.service.impl(async function() {
    const { 
        Tickets, 
        CreateSubaccountTickets, 
        AddMembersTickets,
        DeleteSubaccountTickets,
        ChangeRoleTickets 
    } = this.entities

    // Generic ticket handling
    this.before('CREATE', 'Tickets', req => {
        console.log('Creating ticket:', req.data)
    })

    // Specific handlers for each ticket type
    this.before('CREATE', 'CreateSubaccountTickets', req => {
        if (!req.data.subaccountDisplayName) {
            req.error(400, 'Subaccount display name is required')
        }
    })
})