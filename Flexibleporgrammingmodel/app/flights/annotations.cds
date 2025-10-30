using TravelService as service from '../../srv/travel-service';


annotate service.Travel with @(
    UI.SelectionFields : [
        to_Agency.AgencyID,
        to_Customer.CustomerID,
        TravelStatus.code,
    ],
      UI.LineItem :[
        {
            $Type : 'UI.DataField',
            Value : TravelID,
        },
        {
            $Type : 'UI.DataField',
            Value : TravelStatus_code,
        },
        {
            $Type : 'UI.DataField',
            Value : BeginDate,
        },
        {
            $Type : 'UI.DataField',
            Value : EndDate,
        },
        {
            $Type : 'UI.DataField',
            Value : to_Agency_AgencyID,
        },
        {
            $Type : 'UI.DataField',
            Value : to_Customer_CustomerID,
        },
        {
            $Type : 'UI.DataField',
            Value : TotalPrice,
        },
        {
            $Type : 'UI.DataFieldForAction',
            Label : 'Accept',
            Action : 'TravelService.acceptTravel',
        },
        {
            $Type : 'UI.DataFieldForAction',
            Label : 'Reject',
            Action : 'TravelService.rejectTravel',
        },
    ]
);




