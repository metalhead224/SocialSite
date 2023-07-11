<<<<<<< HEAD
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

=======
>>>>>>> 6d95d7812a4120f9ccebc3c681cc74d9a3383583
namespace Domain
{
    public class Activity
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }
        public string City { get; set; }
        public string Venue { get; set; }
<<<<<<< HEAD
=======
        public bool IsCancelled { get; set; }
        public ICollection<ActivityAttendee> Attendees { get; set; } = new List<ActivityAttendee>();
>>>>>>> 6d95d7812a4120f9ccebc3c681cc74d9a3383583
    }
}