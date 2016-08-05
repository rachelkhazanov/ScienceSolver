function Dens(){
                var density = document.getElementById("density").value;
                var volume = document.getElementById("volume").value;
                var mass = document.getElementById("mass").value;
                if (density == ""){
                        density=mass/volume;
                        //window.alert("density");
                        document.getElementById("outtext").innerHTML = "Density = ";
                        document.getElementById("output").innerHTML = density;

                }
                else if(volume == ""){
                        //window.alert("volume");
                        volume=mass/density;
                        document.getElementById("outtext").innerHTML = "Volume = ";
                        document.getElementById("output").innerHTML = volume;
                }
                else if(mass == ""){
                        //window.alert("mass");
                        mass=density*volume;
                        document.getElementById("outtext").innerHTML = "Mass = ";
                        document.getElementById("output").innerHTML = mass;

                }
                return false;
}