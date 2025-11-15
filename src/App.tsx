import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  ChefHat, 
  MapPin, 
  Phone, 
  Star, 
  Clock, 
  Truck, 
  Heart,
  ShoppingCart,
  Menu,
  X,
  ArrowRight,
  Zap,
  Award,
  Users
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const foodCategories = [
    { name: 'North Indian', icon: '🍛', items: '25+ dishes', color: 'bg-orange-100' },
    { name: 'South Indian', icon: '🥞', items: '20+ dishes', color: 'bg-green-100' },
    { name: 'Chinese', icon: '🍜', items: '15+ dishes', color: 'bg-red-100' },
    { name: 'Street Food', icon: '🌮', items: '30+ items', color: 'bg-yellow-100' },
    { name: 'Beverages', icon: '🥤', items: '12+ drinks', color: 'bg-blue-100' },
    { name: 'Desserts', icon: '🍰', items: '18+ sweets', color: 'bg-purple-100' }
  ];

  const featuredDishes = [
    {
      name: 'Butter Chicken',
      price: '₹280',
      rating: 4.8,
      time: '25 min',
      image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'North Indian',
      spicy: 2
    },
    {
      name: 'Masala Dosa',
      price: '₹120',
      rating: 4.9,
      time: '15 min',
      image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'South Indian',
      spicy: 1
    },
    {
      name: 'Hakka Noodles',
      price: '₹180',
      rating: 4.6,
      time: '20 min',
      image: 'https://images.pexels.com/photos/1907244/pexels-photo-1907244.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Chinese',
      spicy: 2
    },
    {
      name: 'Chole Bhature',
      price: '₹150',
      rating: 4.7,
      time: '18 min',
      image: 'https://images.pexels.com/photos/5940844/pexels-photo-5940844.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'North Indian',
      spicy: 2
    },
    {
      name: 'Pav Bhaji',
      price: '₹100',
      rating: 4.8,
      time: '12 min',
      image: 'https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Street Food',
      spicy: 2
    },
    {
      name: 'Biryani',
      price: '₹250',
      rating: 4.9,
      time: '30 min',
      image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'North Indian',
      spicy: 3
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      rating: 5,
      comment: 'Amazing food quality and super fast delivery! Best in Badarpur.',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'Rajesh Kumar',
      rating: 5,
      comment: 'Authentic taste, reasonable prices. My go-to for daily meals.',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'Anita Singh',
      rating: 4,
      comment: 'Great variety of dishes. The app is so easy to use!',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* Navigation Header */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl">
                <ChefHat className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  K P Food Services
                </h1>
                <p className="text-xs text-gray-500">Badarpur, Delhi</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'Menu', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium"
                  onClick={() => setActiveSection(item.toLowerCase())}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Button className="hidden md:flex bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Order Now
              </Button>
              
              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsMenuOpen(false)} />
          <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-xl transform transition-transform duration-300">
            <div className="p-6 pt-20">
              {['Home', 'Menu', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  className="block w-full text-left py-3 text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium"
                  onClick={() => {
                    setActiveSection(item.toLowerCase());
                    setIsMenuOpen(false);
                  }}
                >
                  {item}
                </button>
              ))}
              <Button className="w-full mt-6 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Order Now
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-transparent to-green-100" />
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200 transition-colors duration-300">
                  🔥 Now Delivering in Badarpur
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 bg-clip-text text-transparent">
                    Delicious Food
                  </span>
                  <br />
                  <span className="text-gray-800">Delivered Fast</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Experience the authentic taste of India with our carefully crafted dishes. 
                  Fresh ingredients, traditional recipes, and lightning-fast delivery.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-lg px-8 py-4 group">
                  <ShoppingCart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Order Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white transition-all duration-300">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-3">
                    <Zap className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">15 Min</div>
                  <div className="text-sm text-gray-600">Avg Delivery</div>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">4.8★</div>
                  <div className="text-sm text-gray-600">Customer Rating</div>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">10K+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Delicious Food"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Truck className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Free Delivery</div>
                      <div className="text-sm text-gray-600">Orders above ₹199</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 bg-orange-500 text-white p-4 rounded-2xl shadow-lg animate-bounce">
                <div className="text-2xl">🍽️</div>
              </div>
              <div className="absolute top-1/2 -right-8 bg-green-500 text-white p-3 rounded-full shadow-lg animate-pulse">
                <Star className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Food Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 mb-4">Our Menu</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Explore Our <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Delicious Categories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From traditional North Indian curries to crispy South Indian delicacies, we have something for every palate.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {foodCategories.map((category, index) => (
              <Card key={category.name} className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-20 h-20 ${category.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-3xl">{category.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-gray-600">{category.items}</p>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                      View Menu
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-red-100 text-red-800 mb-4">Bestsellers</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Chef's Special</span> Recommendations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hand-picked favorites that keep our customers coming back for more.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <Card key={dish.name} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 bg-white">
                <div className="relative overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-500 text-white">
                      <Star className="w-3 h-3 mr-1" />
                      {dish.rating}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Button size="sm" variant="secondary" className="rounded-full p-2 bg-white/90 hover:bg-white hover:text-red-500 transition-colors duration-300">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="flex">
                      {Array.from({length: dish.spicy}).map((_, i) => (
                        <span key={i} className="text-red-500 text-sm">🌶️</span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                      {dish.name}
                    </h3>
                    <Badge variant="outline" className="text-xs">{dish.category}</Badge>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-orange-600">{dish.price}</span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {dish.time}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 group-hover:shadow-lg transition-all duration-300">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Reviews</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              What Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Customers Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.name} className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <div className="flex">
                        {Array.from({length: testimonial.rating}).map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl">
                  <ChefHat className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">K P Food Services</h1>
                  <p className="text-gray-400 text-sm">Badarpur, Delhi</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Serving authentic and delicious food with love since 2020. 
                Your satisfaction is our priority.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-orange-400 mr-3" />
                  <span className="text-gray-300">Badarpur, New Delhi, India</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-orange-400 mr-3" />
                  <span className="text-gray-300">+91 98765 43210</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-orange-400 mr-3" />
                  <span className="text-gray-300">9:00 AM - 11:00 PM</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
              <div className="space-y-3">
                {['Home', 'Menu', 'About Us', 'Contact', 'Track Order'].map((link) => (
                  <a key={link} href="#" className="block text-gray-300 hover:text-orange-400 transition-colors duration-300">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Popular Categories</h3>
              <div className="space-y-3">
                {['North Indian', 'South Indian', 'Chinese', 'Street Food', 'Beverages'].map((category) => (
                  <a key={category} href="#" className="block text-gray-300 hover:text-orange-400 transition-colors duration-300">
                    {category}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <Separator className="my-12 bg-gray-700" />
          
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 K P Food Services. All rights reserved. Made with ❤️ for food lovers in Delhi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;