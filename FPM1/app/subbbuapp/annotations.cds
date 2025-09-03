using TravelService as service from '../../srv/travel-service';
annotate service.Travel with @(
    UI.SelectionFields : [
       to_Agency_AgencyID,
        to_Customer.CustomerID,
        TravelStatus.code,
 
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Value : TravelID,
            Label : 'TravelID',
        },
   {
            $Type : 'UI.DataField',
            Value : TravelStatus_code,
            Label : 'Travel Status Code',
            Criticality : TravelStatus.criticality
        },
          {
            $Type : 'UI.DataField',
            Value : BeginDate,
            Label : 'Begin Date',
           
        },
         {
            $Type : 'UI.DataField',
            Value : EndDate,
            Label : 'End Date',
           
        },

   {
            $Type : 'UI.DataField',
            Value : to_Agency_AgencyID,
            Label : 'Agency ID',
           
        },

 {
            $Type : 'UI.DataField',
            Value : to_Customer_CustomerID,
            Label : 'Customer ID',
        },
         {
            $Type : 'UI.DataField',
            Value : TotalPrice,
            Label : 'Total Price',
        },
       {
           $Type : 'UI.DataFieldForAction',
           Action : 'TravelService.acceptTravel',
       },
       {
           $Type : 'UI.DataFieldForAction',
           Action : 'TravelService.rejectTravel',
       },
      
    ],
);

