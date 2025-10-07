using {consumer.bills as my} from '../db/datamodel';

service Consumer {

    entity Bills as projection on my.Bills;

}