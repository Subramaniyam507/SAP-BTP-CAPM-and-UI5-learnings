using { Currency, Country, custom.managed, sap } from './common';
namespace sap.fe.cap.travel;

aspect MasterData {}

entity Airline : MasterData {
  key AirlineID : String;
  Name          : String;
  CurrencyCode  : Currency;
  AirlinePicURL : String      @UI         : {IsImageURL : true};
};

entity Airport : MasterData {
  key AirportID : String;
  Name          : String;
  City          : String;
  CountryCode   : Country;
};


entity Supplement : managed, MasterData {
  key SupplementID : String;
  Price            : Decimal;
  Type             : Association to SupplementType;
  Description      : localized String;
  CurrencyCode     : Currency;
};

entity Flight : MasterData {
  // TODO:
  // when cuid is added, the to_Airline & to_Connection can be made managed association,
  // furthermore the AirlineID and ConnectionID can be removed,
  // they will be replaced by the generate FKs for to_Airline & to_Connection
  key AirlineID    : String;
  key FlightDate   : Date;
  key ConnectionID : String;

  Price            : Decimal;
  CurrencyCode     : Currency;
  PlaneType        : String;
  MaximumSeats     : Integer;
  OccupiedSeats    : Integer;

  to_Airline       : Association to Airline on to_Airline.AirlineID = AirlineID;
  to_Connection    : Association to FlightConnection on to_Connection.AirlineID = AirlineID
                       and to_Connection.ConnectionID = ConnectionID;
};

entity FlightConnection : MasterData {
  // TODO:
  // once the TODO in Flight is done, similar change can be applied here
  // to_Airline can be managed association and AirlineID can be removed
  // and will be replaced with the generated FK
  key ConnectionID   : String;
  key AirlineID      : String;
  DepartureAirport   : Association to Airport;
  DestinationAirport : Association to Airport;
  DepartureTime      : Time;
  ArrivalTime        : Time;
  Distance           : Integer;
  DistanceUnit       : String;

  to_Airline         : Association to Airline
                         on to_Airline.AirlineID = AirlineID;
};

// showcasing unique constrains ??
// @assert.unique.email: [EMailAddress]
entity Passenger : managed, MasterData {
  key CustomerID : String;
  FirstName      : String;
  LastName       : String;
  Title          : String;
  Street         : String;
  PostalCode     : String;
  City           : String;
  CountryCode    : Country;
  PhoneNumber    : String;
  EMailAddress   : String;
};

entity TravelAgency : MasterData {
  key AgencyID : String;
  Name         : String;
  Street       : String;
  PostalCode   : String;
  City         : String;
  CountryCode  : Country;
  PhoneNumber  : String;
  EMailAddress : String;
  WebAddress   : String;
};


//
// Code Lists
//

entity SupplementType : sap.common.CodeList {
  key code : String enum {
    Beverage = 'BV';
    Meal     = 'ML';
    Luggage  = 'LU';
    Extra    = 'EX';
  };
}
