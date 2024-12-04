using { ticketsystembtp.db as db } from '../db/datamodel';

service TicketService @(path:'/odata') {
    entity Tickets as projection on db.Ticket;
    entity CreateSubaccountTickets as projection on db.CreateSubaccount;
    entity AddMembersTickets as projection on db.AddMembersToSubaccount;
    entity DeleteSubaccountTickets as projection on db.DeleteSubaccount;
    entity ChangeRoleTickets as projection on db.ChangeUserRoleCollection;
}