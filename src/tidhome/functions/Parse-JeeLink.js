// name: Parse JeeLink
// outputs: 1
var s = msg.payload.split(' ')
if(s[0] === 'ROOM') {
    var type = ''
    var nodeid = s[1]
    // var nodeid5 = ("00000" + nodeid).slice (-5)
    var entry = s[2]
    var value = s[4].replace(/(\r\n|\n|\r)/gm,"");
    if(s[3] == 0) {
      type = 'temperature';
      value = value / 10;
    } else if(s[3] == 1) {
      type = 'humidity';
      value = value / 10;
    } else if(s[3] == 2) {
      type = 'pressure';
      value = value / 10;
    } else if(s[3] == 3) {
      type = 'light';
    } else if(s[3] == 4 && value !== 0) {
      type = 'battery';
      value = value / 100;
    } else if(s[3] == 5) {
      type = 'soil';
    } else if(s[3] == 6) {
      type = 'toggle';
      value = parseInt(value);
    }
    
    if(type !== '') {
        msg.topic = 'sensors/rfm868usb/nodes/' + nodeid + '/entries/' + entry + '/events/' + type;
        msg.payload = { 
            "gateway":"rfm868usb",
            "id": nodeid,
            "entry": entry,
            "type": type,
            "value": value
        }
        return msg;
    }
    
    //setTimeout(function() { this.status({}); }, 500);
    //this.status({fill:"green",shape:"dot",text:"processed"});
}
return null;