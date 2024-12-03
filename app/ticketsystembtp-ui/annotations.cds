using TicketService as service from '../../srv/ticket-service';

// Base Ticket annotations
annotate service.Tickets with @(UI: {
    HeaderInfo: {
        TypeName: 'Ticket',
        TypeNamePlural: 'Tickets',
        Title: { Value: description }
    },
    SelectionFields: [category, projectManager],
    LineItem: [
        { Value: category },
        { Value: projectManager },
        { Value: description },
        { Value: createdAt },
        { Value: createdBy }
    ]
}) {
    category        @title: 'Category';
    projectManager  @title: 'Project Manager';
    description    @title: 'Description';
}

// Create Subaccount Ticket annotations
annotate service.CreateSubaccountTickets with @(UI: {
    HeaderInfo: {
        TypeName: 'Create Subaccount Ticket',
        TypeNamePlural: 'Create Subaccount Tickets'
    }
}) {
    subaccountDisplayName  @title: 'Subaccount Name';
    costApprover          @title: 'Cost Approver';
    businessUnit          @title: 'Business Unit';
    costCenter           @title: 'Cost Center';
    subaccountDescription @title: 'Description';
    subaccountRegion     @title: 'Region';
    subaccountParent     @title: 'Parent';
    subaccountLabels     @title: 'Labels';
    forProduction        @title: 'Production';
    betaFeatureEnabled   @title: 'Beta Features';
}

// Add Members Ticket annotations
annotate service.AddMembersTickets with @(UI: {
    HeaderInfo: {
        TypeName: 'Add Members Ticket',
        TypeNamePlural: 'Add Members Tickets'
    }
}) {
    subaccountDisplayName   @title: 'Subaccount Name';
    nameOfUserToBeAdded    @title: 'User Name';
    typeOfUser             @title: 'User Type';
    roleCollection         @title: 'Role Collection';
}

// Delete Subaccount Ticket annotations
annotate service.DeleteSubaccountTickets with @(UI: {
    HeaderInfo: {
        TypeName: 'Delete Subaccount Ticket',
        TypeNamePlural: 'Delete Subaccount Tickets'
    }
}) {
    subaccountDisplayName  @title: 'Subaccount Name';
}

// Change Role Ticket annotations
annotate service.ChangeRoleTickets with @(UI: {
    HeaderInfo: {
        TypeName: 'Change Role Ticket',
        TypeNamePlural: 'Change Role Tickets'
    }
}) {
    userIdToBeChanged     @title: 'User ID';
    emailToBeChanged      @title: 'Email';
    identityProvider      @title: 'Identity Provider';
    newRoleCollection     @title: 'New Role Collection';
}