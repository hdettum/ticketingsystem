const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {
    const {
        Tickets,
        CreateSubaccountTickets,
        AddMembersTickets,
        DeleteSubaccountTickets,
        ChangeRoleTickets
    } = this.entities;

  
    this.on('READ', ['Tickets', 'CreateSubaccountTickets', 'AddMembersTickets', 'DeleteSubaccountTickets', 'ChangeRoleTickets'], async (req, next) => {
        console.log(`Fetching data for: ${req.target.name}`);
        return next(); 
    });
});
