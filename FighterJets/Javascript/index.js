  const planes = [
            { id: "F-22_Raptor",
             name: "Lockheed Martin F-22 Raptor", country: "United States", generation: "5", role: "Fighter",
             image: "photos/F-22_Raptor.jpg" },
            { id: "Eurofighter_Typhoon", name: "Eurofighter Typhoon", country: "Europe", generation: "4.5",role:"Multirole",
             image: "photos/Eurofighter.jpg" },
            { id: "Saab_Gripen", name: "Saab JAS 39 Gripen", country: "Sweden", generation: "4.5",role: "Multirole",
            image: "photos/Saab_JAS_39_Gripen.jpg" },
            { id: "F-35_Lightning_II", name: "Lockheed Martin F-35 Lightning II", country: "United States",role: "Multirole", generation: "5",
            image: "photos/F-35 Ligthtning II.jpg" },
            { id: "Sukhoi_Su-57", name: "Sukhoi Su-57", country: "Russia", generation: "5",role: "Multirole",
             image: "photos/SU-57.jpg" },
            { id: "Mikoyan_MiG-29", name: "Mikoyan MiG-29", country: "Russia", generation: "4",role: "Fighter",
             image: "photos/Mikoyan_MiG-29.jpg" },
            { id: "Dassault_Rafale", name: "Dassault Rafale", country: "France", generation: "4.5",role: "Multirole",
             image: "photos/Rafale.jpg" },
            { id: "Chengdu_J-20", name: "Chengdu J-20", country: "China", generation: "5",role: "Fighter",
             image: "photos/J-20.jpg" },
            { id: "F-15_Eagle", name: "McDonnell Douglas F-15 Eagle", country: "United States", generation: "4",role: "Fighter",
             image: "photos/F-15.jpg" },
            { id: "F-16_Fighting_Falcon", name: "General Dynamics F-16 Fighting Falcon", country: "United States",role: "Multirole", generation: "4",
             image: "photos/F-16_june_2008.jpg" },
            { id: "Mikoyan_MiG-31", name: "Mikoyan MiG-31", country: "Russia", generation: "4",role: "Fighter",
             image: "photos/MiG-31.jpg" },
            { id: "Shenyang_J-31", name: "Shenyang J-31", country: "China", generation: "5",
             image: "photos/Shenyang_J-31.jpg" },
            { id: "Boeing_F-18_Super_Hornet", name: "Boeing F/A-18 Super Hornet", country: "United States", generation: "4.5",role: "Multirole",
             image: "photos/F18.jpg" },
            { id: "Sukhoi_Su-30SM", name: "Sukhoi Su-30SM", country: "Russia", generation: "4++",
            image: "photos/Su-30SM.jpg" },
            { id: "Sukhoi_Su-33", name: "Sukhoi Su-33", country: "Russia", generation: "4",role: "Fighter",
             image: "photos/Su-33.jpg" },
            { id: "Sukhoi_Su-35", name: "Sukhoi Su-35", country: "Russia", generation: "4++",role: "Fighter",
             image: "photos/Su-35.jpg" },
            { id: "Grumman_F-14_Tomcat", name: "Grumman F-14 Tomcat", country: "United States", generation: "4",role: "Fighter",
             image: "photos/F-14.jpg" },
            { id: "Mitsubishi_F-2", name: "Mitsubishi F-2", country: "Japan", generation: "4.5",role: "Multirole",
             image: "photos/F-2.jpg" },
            { id: "Sukhoi_Su-47", name: "Sukhoi Su-47 Berkut", country: "Russia", generation: "5",role:"Fighter",
             image: "photos/Su-47.jpg" },
            { id: "Sukhoi_Su-27", name: "Sukhoi Su-27", country: "Russia", generation: "4",role: "Fighter",
             image: "photos/Su-27.jpg" },
            { id: "Tupolev_Tu-160", name: "Tupolev Tu-160", country: "Russia", generation: "4++", role: "Bomber",
             image: "photos/Tu-160.jpg" },
            { id:"B2", name: "B2_Spirit" , country: "United States" , generation: "5" , role: "Bomber" , image: "photos/B2Spirit.jpg" }
            ];

            const planesContainer = document.getElementById('planes-container');
            const countryFilter = document.getElementById('country-filter');
            const generationFilter = document.getElementById('generation-filter');
            const roleFilter = document.getElementById('role-filter');

            function displayPlanes() {
            planesContainer.innerHTML = '';
            const selectedCountry = countryFilter.value;
            const selectedGeneration = generationFilter.value;
            const selectedRole = roleFilter.value;

            const countryMapping = {
                'United States': 'United States',
                'Russia': 'Russia',
                'Sweden': 'Europe',
                'France': 'Europe',
                'Europe': 'Europe',
                'Japan': 'Other Countries',
                'China': 'Other Countries',
                'Taiwan': 'Other Countries'
            };

            const filteredPlanes = planes.filter(plane => {
                const mappedCountry = countryMapping[plane.country] || 'Other Countries';
                const countryMatch = selectedCountry === 'all' || mappedCountry === selectedCountry;
                const generationMatch = selectedGeneration === 'all' || plane.generation === selectedGeneration;
                const roleMatch = selectedRole === 'all' || plane.role === selectedRole;
                return countryMatch && generationMatch && roleMatch;
            });

            if (filteredPlanes.length === 0) {
                planesContainer.innerHTML = '<p>No jets found for the selected filters.</p>';
                return;
            }

            filteredPlanes.forEach(plane => {
                const card = `
                <a class="card" href="details.html?plane=${plane.id}">
                    <div class="image-container">
                        <img src="${plane.image}" alt="${plane.name}" onerror="this.onerror=null;\
                         this.src='https://placehold.co/400x200/21262d/c9d1d9?text=${encodeURIComponent(plane.name.replace(/ /g, '+'))}'">
                    </div>
                    <div class="card-content">
                        <h2 class="">${plane.name}</h2>
                        <p class="">${plane.country} | Generation ${plane.generation} <br> Role: ${plane.role}</p>
                    </div>
                </a>
                `;
                planesContainer.innerHTML += card;
            });
            }

            countryFilter.addEventListener('change', displayPlanes);
            generationFilter.addEventListener('change', displayPlanes);
            roleFilter.addEventListener('change', displayPlanes);

            document.addEventListener('DOMContentLoaded', displayPlanes);