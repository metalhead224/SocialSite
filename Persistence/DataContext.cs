using Domain;
<<<<<<< HEAD
=======
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
>>>>>>> 6d95d7812a4120f9ccebc3c681cc74d9a3383583
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
<<<<<<< HEAD
    public class DataContext : DbContext
=======
    public class DataContext : IdentityDbContext<AppUser>
>>>>>>> 6d95d7812a4120f9ccebc3c681cc74d9a3383583
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Activity> Activities { get; set; }
<<<<<<< HEAD
=======
        public DbSet<ActivityAttendee> ActivityAttendees { get; set; }
        public DbSet<Photo> Photos { get; set; }
        

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<ActivityAttendee>(x => x.HasKey(aa => new { aa.AppUserId, aa.ActivityId }));

            builder.Entity<ActivityAttendee>()
                .HasOne(u => u.AppUser)
                .WithMany(u => u.Activities)
                .HasForeignKey(aa => aa.AppUserId);

            builder.Entity<ActivityAttendee>()
                .HasOne(u => u.Activity)
                .WithMany(u => u.Attendees)
                .HasForeignKey(aa => aa.ActivityId);
        }
>>>>>>> 6d95d7812a4120f9ccebc3c681cc74d9a3383583
    }
}