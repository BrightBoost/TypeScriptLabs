class Employee {
    private id: number;
    public name: string;
    public jobTitle: string;
    public payRate: number;
    constructor(id: number, name: string,
        jobTitle: string, payRate: number) {
        this.id = id;
        this.name = name;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
    }
    toString(): string {
        return `${this.name} (${this.id}) is a ${this.jobTitle}
  earning $${this.payRate.toFixed(2)}/hr`;
    }
}