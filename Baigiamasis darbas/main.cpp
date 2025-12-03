#include <iostream>
#include <fstream>
#include <sstream>
#include <cmath>
using namespace std;
struct info
{
    string VARDAS;
    double total;
    double remaining;
    double saving_rate;
    double debt_ratio;
    double category_housing;
    double category_food;
    double category_transport;
    double category_other;
    double remain_savings;
};

struct person
{
    string vardas;
    double income, housing, food, transport, debt, savings, other;
};

int main()
{

    ifstream fd ("info.txt");
    ofstream fr ("infoREZ.txt");
    info I[100];
    person P[100];

    string vardas;
    string line;

    double income, housing, food, transport, debt, savings, other;

    int n = 0;


    while(getline(fd, line))
    {

        char vardas[10];
        stringstream ss(line);

        ss.get(vardas, 10);
        P[n].vardas = vardas;

        ss>>P[n].income>>P[n].housing>>P[n].food>>P[n].transport>>P[n].other>>P[n].debt>>P[n].savings;

        n++;

    }

    for(int i=0; i<n; i++)
    {
        I[i].total = P[i].housing + P[i].food + P[i].transport + P[i].debt + P[i].other;
        I[i].remaining = P[i].income - I[i].total;
        I[i].saving_rate = (P[i].savings / P[i].income) * 100;
        I[i].debt_ratio = (P[i].debt / P[i].income) * 100;
        I[i].category_housing = (P[i].housing / P[i].income) * 100;
        I[i].category_food = (P[i].food / P[i].income) * 100;
        I[i].category_transport = (P[i].transport / P[i].income) * 100;
        I[i].category_other = (P[i].other / P[i].income) * 100;
        I[i].remain_savings = P[i].income - (I[i].total + P[i].savings); 
    }

    for(int i=0; i<n; i++)
    {
        cout<<P[i].vardas<<" "<<I[i].total<<" "<<
            I[i].remaining<<" "<<round(I[i].saving_rate * 10) / 10<<"% "<<
            round(I[i].category_housing * 10) / 10<<"% "<<
            round(I[i].category_food * 10) / 10<<"% "<<
            round(I[i].category_transport * 10) / 10<<"% "<<
            round(I[i].category_other * 10) / 10<<"% "<<
            I[i].remain_savings<<endl;
    }



    return 0;
}
