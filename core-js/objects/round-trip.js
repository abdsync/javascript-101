const departTripTicket = {
    name : "Kie",
    from : "Miami", 
    to : "Washington",
    businessClass : false,
    leaveTime : 9,
    arriveTime : 21,
    upgrade () {
      if (departTripTicket.businessClass === false)
      {
        departTripTicket.businessClass = true;
        console.log("You are upgraded to business class");
        
      }
      else 
      {
        console.log("Your ticket is already business class!");
      }
    },
    flightTime () {
      let flighttime = departTripTicket.arriveTime - departTripTicket.leaveTime;
      console.log("Your flight time is : " + flighttime + " hrs");
  }
  };
  
  const returnTripTicket = {
    name : "JJ",
    from : "Frankfurt", 
    to : "Male",
    businessClass : true,
    leaveTime : 4,
    arriveTime : 24,
    upgrade () {
      if (returnTripTicket.businessClass === false)
      {
        returnTripTicket.businessClass = true;
        console.log("You are upgraded to business class!");
        
      }
      else 
      {
        console.log("Your ticket is already business class!");
      }
    },
    flightTime () {
      let flighttime = returnTripTicket.arriveTime - returnTripTicket.leaveTime;
      console.log("Your flight time is : " + flighttime + " hrs");
  }
  };
  
  
  departTripTicket.upgrade();
  departTripTicket.flightTime();
  returnTripTicket.upgrade();
  returnTripTicket.flightTime();