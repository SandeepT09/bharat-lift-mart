import Map "mo:core/Map";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";

actor {
  module Enquiry {
    public type T = {
      name : Text;
      email : Text;
      phone : Text;
      message : Text;
      timestamp : Int;
    };
  };

  let enquiries = Map.empty<Int, Enquiry.T>();
  var nextId = 0;

  public shared ({ caller }) func submitEnquiry(name : Text, email : Text, phone : Text, message : Text) : async () {
    let timestamp = 0; // Placeholder, should be replaced with actual timestamp logic
    let enquiry : Enquiry.T = {
      name;
      email;
      phone;
      message;
      timestamp;
    };
    enquiries.add(nextId, enquiry);
    nextId += 1;
  };

  public query ({ caller }) func getAllEnquiries() : async [Enquiry.T] {
    enquiries.values().toArray();
  };
};
