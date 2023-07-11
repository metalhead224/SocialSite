<<<<<<< HEAD
using Domain;
using MediatR;
=======
using Application.Core;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
>>>>>>> 6d95d7812a4120f9ccebc3c681cc74d9a3383583
using Persistence;

namespace Application.Activities
{
    public class Details
    {
<<<<<<< HEAD
        public class Query : IRequest<Activity>
=======
        public class Query : IRequest<Result<ActivityDto>>
>>>>>>> 6d95d7812a4120f9ccebc3c681cc74d9a3383583
        {
            public Guid Id { get; set; }
        }

<<<<<<< HEAD
        public class Handler : IRequestHandler<Query, Activity>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;

            }
            public async Task<Activity> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Activities.FindAsync(request.Id);
            }
        }

=======
        public class Handler : IRequestHandler<Query, Result<ActivityDto>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Result<ActivityDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                var activity = await _context.Activities
                    .ProjectTo<ActivityDto>(_mapper.ConfigurationProvider)
                    .FirstOrDefaultAsync(x => x.Id == request.Id);

                return Result<ActivityDto>.Success(activity);
            }
        }
>>>>>>> 6d95d7812a4120f9ccebc3c681cc74d9a3383583
    }
}