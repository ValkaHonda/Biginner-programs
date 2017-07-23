/**
 * Created by Valka on 7/21/2017.
 */
public class Company {
    private String name;
    private String date;
    private String bulstat;

    public void setName(String inputName){
        this.name = inputName;
    }
    public void setDate(String inputDate){
        this.date = inputDate;
    }
    public void setBulstat(String inputBustat){
        if (inputBustat.length() == 10) {
            this.bulstat = inputBustat;
        }
    }
    public String getName(){
        return this.name;
    }
    public String getDate(){
        return this.date;
    }
    public String getBulstat(){
        return this.bulstat;
    }
}
