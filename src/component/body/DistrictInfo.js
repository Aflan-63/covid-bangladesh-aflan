import React, { Component } from 'react'
import axios from 'axios'
import '../../style.css'
export default class DistrictInfo extends Component {

    constructor() {
        super();
        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        axios.get('https://corona-bd.herokuapp.com/district')
            .then(response => {
                // console.log(response.data.data);
                this.setState({ data: response.data.data })
            })
            .catch(error => {
                console.log(error)
            })
    }

    countDhaka() {
        // Index number of each district, under Dhaka Division - index(ID)
        // DhakaDisctrict: 3(2), DhakaCity: 0(1), Faridpur: null(null), 
        // Gazipur: 2(3), Gopalganj: 18(13),
        // Kishoreganj: 7(4), Madaripur: 4(5), Manikganj: 15(6), Munshiganj: 5(8),
        // Narayanganj: 1(7), Narsingdi: 16(9), Rajbari: 12(10), Shariatpur: 29(12),
        // Tangail: 22(11)
        let dhakaDivision = 0;
        const myList = this.state.data;
        console.log("My List: ",myList);
        Object.keys(myList).forEach(function (key, index) {

          if (key === '0' || key === '1' || key === '2' || key === '3'
            || key === '4' || key === '5' || key === '7'|| key === '12' 
            || key === '15' || key === '16' || key === '18' || key === '22'
            || key === '29') {
            dhakaDivision = dhakaDivision + myList[key].count;
          }
        });
        return dhakaDivision;
      }
    
      countRangpur() {
        // Index number of each district, under Rangpur Division - index(ID)
        // rangpurDivision: null(null), // Dinajpur: null(null), // Gaibandha: 10(13),
        // Kurigram: null(null), // Lalmonirhat: 28(33), // Nilphamari: 19(24), 
        // Panchagarh: null(null), // Rangpur: 23(22), // Thakurgaon: 20(34)
        let rangpurDivision = 0;
        const myList = this.state.data;
        Object.keys(myList).forEach(function (key, index) {
          if (key === '10' || key === '19' || key === '20' || key === '23'
          || key === '28') {
            rangpurDivision = rangpurDivision + myList[key].count;
          }
        });
        return rangpurDivision;
      }
    
      countRajshahi() { 
        // Index number of each district, under Rajshahi Division - index(ID)
        // rajshahiDivision: null(null), // Bogura: null(null), // Jaipurhat: null(null), 
        // Naogaon: null(null), // Natore: null(null), // ChapaiNawabganj: null(null), 
        // Pabna: null(null), // Rajshahi: null(null),// Sirajganj: null(null)
        let rajshahiDivision = 0;
        const myList = this.state.data;
        Object.keys(myList).forEach(function (key, index) {
          if (key === '-1') {
            rajshahiDivision = rajshahiDivision + myList[key].count;
          }
        });
        return rajshahiDivision;
    
      }
    
      countMymensingh() {
        // Index number of each district, under Mymensingh Division - index(ID)
        // mymensinghDivision: null(null),
        // Jamalpur: 9(27), // Mymensingh: 14(26), // Netrokona: 24(28),
        // Sherpur: 21(29)
        let mymensinghDivision = 0;
        const myList = this.state.data;
        Object.keys(myList).forEach(function (key, index) {
          if (key === '9' || key === '14' || key === '24' || key === '21') {
            mymensinghDivision = mymensinghDivision + myList[key].count;
          }
        });
        return mymensinghDivision;
      }
    
      countSylhet() {
    
        // Index number of each district, under Sylhet Division - index(ID)
        // sylhetDivision: 0, // Habiganj: 32(20), // Moulvibazar: 30(19),
        // Sunamganj: null(null), // Sylhet: 27(21),
        let sylhetDivision = 0;
        const myList = this.state.data;
        Object.keys(myList).forEach(function (key, index) {
          if (key === '32' || key === '30' || key === '27') {
            sylhetDivision = sylhetDivision + myList[key].count;
          }
        });
        return sylhetDivision;
    
      }
    
      countKhulna() {
        // Index number of each district, under Khulna Division - index(ID)
        // khulnaDivision: 0, // Bagerhat: null(null), // Chuadanga: 26(25),
        // Jashore: null(null), // Jhenaidah: null(null), // Khulna: null(null),
        // Kushtia: null(null), // Magura: null(null), // Meherpur: null(null), 
        // Narail: null(null), // Satkhira: null(null),
    
        let khulnaDivision = 0;
        const myList = this.state.data;
        Object.keys(myList).forEach(function (key, index) {
          if (key === '26' || key === '') {
            khulnaDivision = khulnaDivision + myList[key].count;
          }
        });
        return khulnaDivision;
      }
    
      countBarishal() {
    
        // Index number of each district, under Chittagong Division - index(ID)
        // barisalDivision: 0, // Barguna: 17(30), // Barishal: null(null),
        // Bhola: null(null), // Jhalokathi: null(null), // Patuakhali: 33(31),
        // Pirojpur: null(null),
        
        let barisalDivision = 0;
        const myList = this.state.data;
        Object.keys(myList).forEach(function (key, index) {
          if (key === '17' || key === '33' || key === '') {
            barisalDivision = barisalDivision + myList[key].count;
          }
        });
        return barisalDivision;
    
      }
    
      countChittagong()
      {
        // Index number of each district, under Chittagong Division - index(ID)
        // chittagongDivision: 0, // Bandarban: null(null), // Brahmanbaria: 13(17),
        // Chandpur: 11(18), // Chattogram: 6(14), // Cumilla: 8(16), 
        // CoxsBazar: 31(15), // Feni: null(null), // Khagrachhari: null(null), 
        // Lakshmipur: 25(32), // Noakhali: null(null), // Rangamati: null(null)
        let chittagongDivision = 0;
        const myList = this.state.data;
        Object.keys(myList).forEach(function (key, index) {
          if (key === '6' || key === '8' || key === '11' || key === '13' 
          || key === '31' || key === '25') {
            chittagongDivision = chittagongDivision + myList[key].count;
          }
        });
        return chittagongDivision;
    
      }

    render() {
        return (

            <div className="districtName">
                <div className="infomymensingh">
                    <svg preserveAspectRatio="none" viewBox="0 0 72.66162109375 72.66140747070312" className="mymensigncircle">
                        <path d="M 36.33071136474609 0 C 56.39560699462891 0 72.66142272949219 16.26581001281738 72.66142272949219 36.33070373535156 C 72.66142272949219 56.39559936523438 56.39560699462891 72.66140747070313 36.33071136474609 72.66140747070313 C 16.26581382751465 72.66140747070313 0 56.39559936523438 0 36.33070373535156 C 0 16.26581001281738 16.26581382751465 0 36.33071136474609 0 Z" /></svg>
                    <div className="mymensignh" />
                    <div className="amount5b029228"> 00{this.countMymensingh()}</div>
                </div>
                <div className="infodhaka">
                    <svg preserveAspectRatio="none" viewBox="0 0 72.66162109375 72.66143798828125" className="dhakacircle">
                        <path d="M 36.33071136474609 0 C 56.39560699462891 0 72.66142272949219 16.26581001281738 72.66142272949219 36.33070373535156 C 72.66142272949219 56.39559936523438 56.39560699462891 72.66140747070313 36.33071136474609 72.66140747070313 C 16.26581382751465 72.66140747070313 0 56.39559936523438 0 36.33070373535156 C 0 16.26581001281738 16.26581382751465 0 36.33071136474609 0 Z" /></svg>
                    <div className="dhaka" />
                    <div className="amount11fef4c3"> 0{this.countDhaka()}</div>
                </div>
                <div className="infosylhet">
                    <svg preserveAspectRatio="none" viewBox="0 0 72.66162109375 72.66140747070312" className="sylhetcircle">
                        <path d="M 36.33071136474609 0 C 56.39560699462891 0 72.66142272949219 16.26581001281738 72.66142272949219 36.33070373535156 C 72.66142272949219 56.39559936523438 56.39560699462891 72.66140747070313 36.33071136474609 72.66140747070313 C 16.26581382751465 72.66140747070313 0 56.39559936523438 0 36.33070373535156 C 0 16.26581001281738 16.26581382751465 0 36.33071136474609 0 Z" /></svg>
                    <div className="sylhet" />
                    <div className="amount9ee58caf"> 000{this.countSylhet()}</div>
                </div>
                <div className="infochittagong">
                    <svg preserveAspectRatio="none" viewBox="0 0 72.66162109375 72.661376953125" className="chittagongcircle">
                        <path d="M 36.33071136474609 0 C 56.39560699462891 0 72.66142272949219 16.26581001281738 72.66142272949219 36.33070373535156 C 72.66142272949219 56.39559936523438 56.39560699462891 72.66140747070313 36.33071136474609 72.66140747070313 C 16.26581382751465 72.66140747070313 0 56.39559936523438 0 36.33070373535156 C 0 16.26581001281738 16.26581382751465 0 36.33071136474609 0 Z" /></svg>
                    <div className="chittagon" />
                    <div className="amountde0eb364"> 00{this.countChittagong()}</div>
                </div>
                <div className="infobarishal">
                    <svg preserveAspectRatio="none" viewBox="0 0 72.66162109375 72.661376953125" className="barishalcircle">
                        <path d="M 36.33071136474609 0 C 56.39560699462891 0 72.66142272949219 16.26581001281738 72.66142272949219 36.33070373535156 C 72.66142272949219 56.39559936523438 56.39560699462891 72.66140747070313 36.33071136474609 72.66140747070313 C 16.26581382751465 72.66140747070313 0 56.39559936523438 0 36.33070373535156 C 0 16.26581001281738 16.26581382751465 0 36.33071136474609 0 Z" /></svg>
                    <div className="barishal" />
                    <div className="amount4ae7a04c"> 000{this.countBarishal()}</div>
                </div>
                <div className="infokhulna">
                    <svg preserveAspectRatio="none" viewBox="0 0 72.66162109375 72.661376953125" className="khulnacircle">
                        <path d="M 36.33071136474609 0 C 56.39560699462891 0 72.66142272949219 16.26581001281738 72.66142272949219 36.33070373535156 C 72.66142272949219 56.39559936523438 56.39560699462891 72.66140747070313 36.33071136474609 72.66140747070313 C 16.26581382751465 72.66140747070313 0 56.39559936523438 0 36.33070373535156 C 0 16.26581001281738 16.26581382751465 0 36.33071136474609 0 Z" /></svg>
                    <div className="khulna" />
                    <div className="amountb348c96d"> 000{this.countKhulna()}</div>
                </div>
                <div className="inforajshahi">
                    <svg preserveAspectRatio="none" viewBox="0 0 72.66162109375 72.66143798828125" className="rajshahicircle">
                        <path d="M 36.33071136474609 0 C 56.39561080932617 0 72.66142272949219 16.26581192016602 72.66142272949219 36.33070755004883 C 72.66142272949219 56.39560317993164 56.39561080932617 72.66141510009766 36.33071136474609 72.66141510009766 C 16.26581382751465 72.66141510009766 0 56.39560317993164 0 36.33070755004883 C 0 16.26581192016602 16.26581382751465 0 36.33071136474609 0 Z" /></svg>
                    <div className="rajshahi" />
                    <div className="amount1dbc32ea">000{this.countRajshahi()}</div>
                </div>
                <div className="inforangpur">
                    <svg preserveAspectRatio="none" viewBox="0 0 72.66162109375 72.66140747070312" className="rangpurcircle">
                        <path d="M 36.33071136474609 0 C 56.39560699462891 0 72.66142272949219 16.26581001281738 72.66142272949219 36.33070373535156 C 72.66142272949219 56.39559936523438 56.39560699462891 72.66140747070313 36.33071136474609 72.66140747070313 C 16.26581382751465 72.66140747070313 0 56.39559936523438 0 36.33070373535156 C 0 16.26581001281738 16.26581382751465 0 36.33071136474609 0 Z" /></svg>
                    <div className="rangpur" />
                    <div className="amount"> 00{this.countRangpur()}</div>
                </div>
            </div>
        )
    }
}
