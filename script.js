        // Client data with construction project photos
        const clientData = {
            amma: {
                name: "Amma Construction India Pvt. Ltd.",
                industry: "Construction & Infrastructure",
                location: "Karnataka, India",
                since: "2019",
                project: "Residential & Commercial Projects",
                image: "AC",
                logo: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=100&h=100&fit=crop&crop=center",
                constructionPhotos: [
                    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=300&h=200&fit=crop&crop=center",
                    "https://images.unsplash.com/photo-1590564882972-cd53a36dd787?w=300&h=200&fit=crop&crop=center",
                    "https://images.unsplash.com/photo-1615810365511-5cb78e8df1e8?w=300&h=200&fit=crop&crop=center",
                    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&h=200&fit=crop&crop=center"
                ]
            },
            laxman: {
                name: "Laxman Kamath & Co.",
                industry: "Engineering Consultancy",
                location: "Mangalore, India",
                since: "2020",
                project: "Structural Engineering",
                image: "LK",
                logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
                constructionPhotos: [
                    "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=300&h=200&fit=crop&crop=center",
                    "https://images.unsplash.com/photo-1597149926676-eb0c5ab7e15a?w=300&h=200&fit=crop&crop=center",
                    "https://images.unsplash.com/photo-1590725175988-630d60ea5762?w=300&h=200&fit=crop&crop=center",
                    "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=300&h=200&fit=crop&crop=center"
                ]
            },
            // Add other clients here with same structure...
            mecadez: {
                name: "Mecadez Core Technologies Pvt. Ltd.",
                industry: "Technology Solutions",
                location: "Bangalore, India",
                since: "2021",
                project: "Tech Infrastructure",
                image: "MC",
                logo: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=100&h=100&fit=crop&crop=center",
                constructionPhotos: [
                    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center",
                    "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=300&h=200&fit=crop&crop=center",
                    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop&crop=center",
                    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=200&fit=crop&crop=center"
                ]
            },
            meda: {
                name: "Mecadez Core Technologies Pvt. Ltd.",
                industry: "Technology Solutions",
                location: "Bangalore, India",
                since: "2021",
                project: "Tech Infrastructure",
                image: "MC",
                logo: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=100&h=100&fit=crop&crop=center",
                constructionPhotos: [
                    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center",
                    "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=300&h=200&fit=crop&crop=center",
                    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop&crop=center",
                    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=200&fit=crop&crop=center"
                ]
            }
            // Continue with other clients following the same pattern...
        };

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Mobile menu toggle
        const mobileMenu = document.getElementById('mobile-menu');
        const navLinks = document.getElementById('nav-links');
        const header = document.querySelector('header');

        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('show');
            const bars = mobileMenu.querySelectorAll('.bar');
            bars.forEach(bar => bar.classList.toggle('animate'));
        });

        // Hide header on scroll down, show on scroll up
        let lastScrollTop = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            if (currentScroll > lastScrollTop && currentScroll > 100) {
                header.classList.add('hide');
            } else {
                header.classList.remove('hide');
            }
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        });

        // Gallery filter functionality
        const filterBtns = document.querySelectorAll('.filter-btn');
        const galleryItems = document.querySelectorAll('.gallery-item');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');

                galleryItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });

        // Client modal functions
        function openModal(clientId) {
            const client = clientData[clientId];
            if (!client) return;

            const modal = document.getElementById('clientModal');
            const clientImage = document.getElementById('clientImage');
            const photoGrid = document.getElementById('photoGrid');
            
            document.getElementById('modalTitle').textContent = 'Client Portfolio';
            document.getElementById('clientName').textContent = client.name;
            document.getElementById('clientIndustry').textContent = client.industry;
            document.getElementById('clientLocation').textContent = client.location;
            document.getElementById('clientSince').textContent = client.since;
            document.getElementById('clientProject').textContent = client.project;
            
            // Set up logo/profile image
            clientImage.innerHTML = `
                <img src="${client.logo}" alt="${client.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                <div class="initials" style="display: none;">${client.image}</div>
            `;
            
            // Set up construction photos
            photoGrid.innerHTML = '';
            if (client.constructionPhotos) {
                client.constructionPhotos.forEach((photoUrl, index) => {
                    const photoItem = document.createElement('div');
                    photoItem.className = 'photo-item';
                    if (index === 0) photoItem.classList.add('large');
                    
                    photoItem.innerHTML = `
                        <img src="${photoUrl}" alt="${client.name} Project ${index + 1}" 
                             onerror="this.parentElement.classList.add('photo-placeholder-item'); this.style.display='none';">
                    `;
                    photoGrid.appendChild(photoItem);
                });
            }
            
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            const modal = document.getElementById('clientModal');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Close modal when clicking outside
        window.onclick = function(event) {
            const modal = document.getElementById('clientModal');
            if (event.target === modal) {
                closeModal();
            }
        }

        // Close modal with Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeModal();
            }
        });

        // Add active class to nav items on scroll
        window.addEventListener('scroll', function() {
            const sections = document.querySelectorAll('section');
            const navItems = document.querySelectorAll('.nav-links a');
            
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === '#' + current) {
                    item.classList.add('active');
                }
            });
        });
