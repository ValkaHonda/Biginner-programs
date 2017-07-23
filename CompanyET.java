/**
 * Created by Valka on 7/21/2017.
 */
public class CompanyET extends Company {
    public CompanyET(){
        super();
    }
    private String CEOName;
    private double initialCapital;
    private double todayCapital;

    public void setCEOName(String CEOName) {
        this.CEOName = CEOName;
    }

    public void setInitialCapital(double initialCapital) {
        this.initialCapital = initialCapital;
    }

    public void setTodayCapital(double todayCapital) {
        this.todayCapital = todayCapital;
    }

    public String getCEOName() {
        return CEOName;
    }

    public double getInitialCapital() {
        return initialCapital;
    }

    public double getTodayCapital() {
        return todayCapital;
    }
    public double getProfit(){
        double temp1 = getTodayCapital();
        double temp2 = getInitialCapital();
        return (temp1 - temp2);
    }
}
